var PageAccessToken = GetPageAccessToken(chayns.env.site.tapp.id, function (res) { return res; });

var Server = 'https://api.chayns.net/v2.0';
function GetUserByQR(QrData, success, error) {
    var config = {
        url: Server + '/' + chayns.env.site.locationId + '/User?qrcode=' + QrData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + PageAccessToken
        }
    };
    fetch(config.url, config)
        .then(function(response) {
            response.json()
                .then(function (data) {
                    if (response.ok) {
                        success(data.data[0]);
                    } else {
                        error(response);
                    }
                });
        });
}
