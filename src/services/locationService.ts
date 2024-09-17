export const getUserLocation = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    resolve(`${latitude},${longitude}`)
                },
                (error) => reject(error.message)
            )
        } else {
            reject('Geolocation not supported')
        }
    })
}