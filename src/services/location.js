export const getUserLocationInfo = () => {
    return fetch("https://ipinfo.io/json?token=1195e4de5eca89").then(res => {
        return res.json();
    })
}