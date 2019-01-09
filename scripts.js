const foodApp = {};

$(function () {
    foodApp.init();
});

foodApp.init = function () {
    // console.log('test');
    foodApp.getCity();
}

foodApp.getCity = function () {
    $('.restoSearch').on('submit', function (e) {
        e.preventDefault();
        const cityName = $('[name=city]').val();
        // console.log(cities);


        // cities.forEach(city => {
        //     console.log(city);
        // })

        // console.log(city);
        foodApp.getInfo(cityName);
    })
}

foodApp.getInfo = function (cityName) {
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`,
        method: 'GET',
        dataType: "JSON",
        headers: {
            "user-key": "e9a7859e3a248ef91a90f1d6e0032838"
        }
    }).then(res => {
        const cityOptions = res.location_suggestions;
        console.log(cityOptions);

        cityOptions.forEach(city => {
            console.log(city.name);
            $(".optionsList").append(
                `<li>${city.name}</li>`
            )
        })
    });
}