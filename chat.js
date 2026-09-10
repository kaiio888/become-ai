// Become AI — NOVA | Google Gemini
const SITE_CONTEXT = `You are NOVA, the AI coach inside the Become AI website.
Become AI focuses on discipline, habits, accountability, study consistency, and simple workouts.
Be practical and direct. Give concrete steps, not generic hype.
Profiles: The Forger (fixed routine; M/W/F full-body strength, T/Th brisk walk, weekend rest/mobility);
The Sentinel (one non-negotiable hour; fixed-time circuit; Sunday mobility);
The Wildfire (short intense sprints/recovery; HIIT M/W/F);
The Cartographer (logging/weekly review; 4-week workout block).
Do not invent site-specific facts. You are not a doctor or personal trainer.`;
export async function onRequestPost({request,env}) {
  try {
    const {message} = await request.json();
    if (typeof message!=="string" || !message.trim()) return json({error:"Message is required."},400);
    if (message.length>4000) return json({error:"Message is too long."},400);
    const key=env.GEMINI_API_KEY;
    if (!key) return json({error:"NOVA is not connected. Add GEMINI_API_KEY in Cloudflare Pages."},500);
    const model=env.GEMINI_MODEL || "gemini-2.5-flash";
    const url=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`;
    const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
      systemInstruction:{parts:[{text:SITE_CONTEXT}]},
      contents:[{role:"user",parts:[{text:message.trim()}]}],
      generationConfig:{temperature:0.7,maxOutputTokens:700}
    })});
    const data=await r.json();
    if(!r.ok){console.error("Gemini error",data);return json({error:"Gemini could not answer. Check the API key and model."},502);}
    const reply=data?.candidates?.[0]?.content?.parts?.map(x=>x.text||"").join("").trim();
    if(!reply)return json({error:"Gemini returned an empty response."},502);
    return json({reply,name:"NOVA"});
  } catch(e){console.error(e);return json({error:"NOVA hit a temporary server error."},500);}
}
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"}});}
