const client_id = '96df458142bc476e8b0f5e987369b0e9'
const redirect_uri = "http://localhost:3000/callback"
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const endpoint = "https://accounts.spotify.com/authorize"

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        let parts = item.split("=")

        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}

export const loginUrl = `${endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`