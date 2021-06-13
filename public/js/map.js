mapboxgl.accessToken = 'pk.eyJ1IjoibWlhMjN6IiwiYSI6ImNrcDI5ZXJxeTE1NnkydW13anVqcGE4M28ifQ.1MSQALU4JLQd4jOuayuCbQ';

let detailerToggle = true;
let paintToggle = true;
let wrapToggle = true;
let coatToggle = true;
let diyToggle = true;

let toggle = [detailerToggle, paintToggle, wrapToggle, coatToggle, diyToggle];

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        marker.remove();
        if(tab.classList.contains("activeTab")){
            tab.classList.remove("activeTab");
            console.log("click");
            tab.classList.add("inactiveTab");
            checkToggle();
            checkMap();
        }else{
            tab.classList.remove("inactiveTab");
            tab.classList.add("activeTab");
            checkToggle();
            checkMap();
        }
    })
})

function checkToggle(){
    for(i=0;i<toggle.length;i++){
        if(tabs[i].classList.contains("activeTab")){
            toggle[i] = true;
            console.log(toggle[i]);
        } else{
            toggle[i] = false;
            console.log(toggle[i]);
        }
    }
}

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [114.7277, 4.5353], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

var detailerjson = {
    type: "FeatureCollection",
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [114.4133805, 4.6500147]
            },
            properties: {
                title: 'Carpro',
                description: 'DIY / Detailer',
                facebook: "https://www.facebook.com/carpro.brunei/",
                instagram: "https://www.instagram.com/carpro.brunei/?hl=en",
                number: "+673 8611759"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.8586454, 4.8884972]
            },
            properties: {
            title: 'Bruslick',
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/BruSlickAutoDetailing/",
            instagram: "https://www.instagram.com/bruslick/?hl=en",
            number: "+673 8904905"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9670116, 4.9490524]
            },
            properties: {
            title: 'RC Maju',
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/rcmajubndetailing/",
            instagram: "https://www.instagram.com/rcmaju.bn/?hl=en",
            number: "+673 8604838"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9124974, 4.9169448]
            },
            properties: {
            title: "The Gloss Factory",
            description: 'Detailer',
            facebook: "https://www.facebook.com/theglossfactorybrunei/",
            instagram: "https://www.instagram.com/theglossfactory/",
            number: "+6738810284",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9174316, 4.896568]
            },
            properties: {
            title: "Angelwax Brunei",
            description: 'Detailer / DIY',
            facebook: "https://www.facebook.com/angelwax.brunei/",
            instagram: "https://www.instagram.com/angelwaxbrunei/",
            number: "+673737 9899",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [115.0217297, 4.980324]
            },
            properties: {
            title: "HeCanWash",
            description: 'Detailer',
            facebook: "",
            instagram: "https://www.instagram.com/hecanwash/",
            number: "+673 7297996",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9248742, 4.909353]
            },
            properties: {
            title: "Meguiar's Brunei",
            description: "Detailer / DIY",
            facebook: "https://www.facebook.com/meguiarsbn",
            instagram: "https://www.instagram.com/meguiarsbn/",
            number: "+673 7192218",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.8461513, 4.8836927]
            },
            properties: {
            title: "Znetic Detailing Solutions",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/ZneticDetailingSolutions",
            instagram: "https://www.instagram.com/znetic.detailingsolutions/",
            number: "+673 7322771",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9074654, 4.969283]
            },
            properties: {
            title: "99detailing.bn",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/99detailing-101708664807907",
            instagram: "https://www.instagram.com/99detailing.bn/",
            number: "+673 7135260",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.2159486, 4.5883066]
            },
            properties: {
            title: "KM Car Detailing BN",
            description: 'Detailer / Coater / Wrap',
            facebook: "https://www.facebook.com/kmcardetailingbn",
            instagram: "https://www.instagram.com/kmcardetailingbn/",
            number: "+673 8863636",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9439269, 4.9538238]
            },
            properties: {
            title: "KM Car Detailing BN",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/kmcardetailingbn",
            instagram: "https://www.instagram.com/kmcardetailingbn/",
            number: "+673 8863636",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.963413, 4.8831033]
            },
            properties: {
            title: "Kota Batu Detailing BN",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/kotabatudetailingbn-117155210202978/",
            instagram: "https://www.instagram.com/kotabatudetailing.bn/",
            number: "+673 7254349",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.922036, 4.904793]
            },
            properties: {
            title: "OCDBN",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/OCDBNOFFICIAL/",
            instagram: "https://www.instagram.com/ocdbn/",
            number: "+673 7322112",
            }
        }
    ]
}

var coaterjson = {
    type: "FeatureCollection",
    features: [
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.8586454, 4.8884972]
            },
            properties: {
            title: 'Bruslick',
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/BruSlickAutoDetailing/",
            instagram: "https://www.instagram.com/bruslick/?hl=en",
            number: "+673 8904905"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9670116, 4.9490524]
            },
            properties: {
            title: 'RC Maju',
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/rcmajubndetailing/",
            instagram: "https://www.instagram.com/rcmaju.bn/?hl=en",
            number: "+673 8604838"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9124974, 4.9169448]
            },
            properties: {
            title: "The Gloss Factory",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/theglossfactorybrunei/",
            instagram: "https://www.instagram.com/theglossfactory/",
            number: "+6738810284",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9174316, 4.896568]
            },
            properties: {
            title: "Angelwax Brunei",
            description: 'Detailer / Coater / DIY',
            facebook: "https://www.facebook.com/angelwax.brunei/",
            instagram: "https://www.instagram.com/angelwaxbrunei/",
            number: "+673737 9899",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9074654, 4.969283]
            },
            properties: {
            title: "99detailing.bn",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/99detailing-101708664807907",
            instagram: "https://www.instagram.com/99detailing.bn/",
            number: "+673 7135260",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.8461513, 4.8836927]
            },
            properties: {
            title: "Znetic Detailing Solutions",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/ZneticDetailingSolutions",
            instagram: "https://www.instagram.com/znetic.detailingsolutions/",
            number: "+673 7322771",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.2159486, 4.5883066]
            },
            properties: {
            title: "KM Car Detailing BN",
            description: 'Detailer / Coater / Wrap',
            facebook: "https://www.facebook.com/kmcardetailingbn",
            instagram: "https://www.instagram.com/kmcardetailingbn/",
            number: "+673 8863636",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9439269, 4.9538238]
            },
            properties: {
            title: "KM Car Detailing BN",
            description: 'Detailer / Coater / Wrap',
            facebook: "https://www.facebook.com/kmcardetailingbn",
            instagram: "https://www.instagram.com/kmcardetailingbn/",
            number: "+673 8863636",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.963413, 4.8831033]
            },
            properties: {
            title: "Kota Batu Detailing BN",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/kotabatudetailingbn-117155210202978/",
            instagram: "https://www.instagram.com/kotabatudetailing.bn/",
            number: "+673 7254349",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.922036, 4.904793]
            },
            properties: {
            title: "OCDBN",
            description: 'Detailer / Coater',
            facebook: "https://www.facebook.com/OCDBNOFFICIAL/",
            instagram: "https://www.instagram.com/ocdbn/",
            number: "+673 7322112",
            }
        }
    ]
}

var diyjson = {
    type: "FeatureCollection",
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [114.4133805, 4.6500147]
            },
            properties: {
                title: 'Carpro',
                description: 'DIY / Detailer',
                facebook: "https://www.facebook.com/carpro.brunei/",
                instagram: "https://www.instagram.com/carpro.brunei/?hl=en",
                number: "+673 8611759"
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9174316, 4.896568]
            },
            properties: {
            title: "Angelwax Brunei",
            description: 'Detailer / Coater / DIY',
            facebook: "https://www.facebook.com/angelwax.brunei/",
            instagram: "https://www.instagram.com/angelwaxbrunei/",
            number: "+673 7379899",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9248742, 4.909353]
            },
            properties: {
            title: "Meguiar's Brunei",
            description: "Detailer / DIY",
            facebook: "https://www.facebook.com/meguiarsbn",
            instagram: "https://www.instagram.com/meguiarsbn/",
            number: "+673 7192218",
            }
        }
    ]
}

var geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: []
            },
            properties: {
            title: "Standout Premium Car Care",
            description: 'Mobile Car Wash',
            facebook: "",
            instagram: "https://www.instagram.com/standout.premiumcarcare/",
            number: "+6738876036",
            }
        }
    ]
};
/*
detailerjson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
 
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
        '<h3>' +
        marker.properties.title +
        '</h3><p>' +
        marker.properties.description +
        '</p><a target="_blank" href="' +
        marker.properties.facebook + 
        '"><i class="fab fa-facebook-square"></i></a><a target="_blank" href="' +
        marker.properties.instagram +
        '"><i class="fab fa-instagram-square"></i></a>'
    )
    
)
.addTo(map);
});
*/

if(detailerToggle===true){
    detailerjson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
         
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
                '<h3>' +
                marker.properties.title +
                '</h3><p>' +
                marker.properties.description +
                '</p><a target="_blank" href="' +
                marker.properties.facebook + 
                '"><i class="fab fa-facebook-square"></i></a><a target="_blank" href="' +
                marker.properties.instagram +
                '"><i class="fab fa-instagram-square"></i></a>'
            )
            
        )
        .addTo(map);
        });
}

if(coatToggle===true){
    coaterjson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
         
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
                '<h3>' +
                marker.properties.title +
                '</h3><p>' +
                marker.properties.description +
                '</p><a target="_blank" href="' +
                marker.properties.facebook + 
                '"><i class="fab fa-facebook-square"></i></a><a target="_blank" href="' +
                marker.properties.instagram +
                '"><i class="fab fa-instagram-square"></i></a>'
            )
            
        )
        .addTo(map);
        });
}

if(diyToggle===true){
    diyjson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
         
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
                '<h3>' +
                marker.properties.title +
                '</h3><p>' +
                marker.properties.description +
                '</p><a target="_blank" href="' +
                marker.properties.facebook + 
                '"><i class="fab fa-facebook-square"></i></a><a target="_blank" href="' +
                marker.properties.instagram +
                '"><i class="fab fa-instagram-square"></i></a>'
            )
            
        )
        .addTo(map);
        });
}

var sort = document.getElementById("sort");

var mapContainer = document.getElementById("mapContainer")

    let list = document.getElementById("list");

    sort.addEventListener("change", function(){
        if(this.value === "list"){
            list.classList.remove("hidden");
            mapContainer.classList.add("hidden");
        }
        else if(this.value === "map"){
            list.classList.add("hidden");
            mapContainer.classList.remove("hidden");
        }
    })