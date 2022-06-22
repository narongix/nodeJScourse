const request = require('request')
const mapbox_token = 'pk.eyJ1IjoibnJheWl4IiwiYSI6ImNsNDZpcXRzejA5MDQzYnBpNmF4eXpqbGUifQ.G46FncNGMfmonlY_GTnQZA'

const geocode = (address, callback) => {
    const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapbox_token}`

    request({url:mapbox_url, json:true},(error,{body}) => {
        //console.log(response.body.features)
        if(error){
            callback('Unable to connect to location services!',undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longtitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })

}



module.exports = geocode