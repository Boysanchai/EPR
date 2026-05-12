const API_URL =
"https://script.google.com/macros/s/AKfycbz2NxyVa_Y6ql79KlEEkSggTfVwvNS__QyHlKpN3l0P3ywsEWWHCRXfHAbQLmzm_h9j/exec";

async function api(action, data = {}) {

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action,
      ...data
    })
  });

  return await res.json();
}
