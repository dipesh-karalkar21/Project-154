AFRAME.registerComponent("fishgen",{
    init:function(){
        for(var i = 1 ; i<=5 ; i++){
            var fish = document.createElement("a-entity")
            fish.setAttribute("gltf-model","#fish")
            
            var x = parseInt(Math.random()*(3.5 - (-3.5)) + (-3.5))
            var z = parseInt(Math.random()*(0 - (-3.5)) + (-3.5))
            var y = (Math.random()*(1.7 - 1.2) + 1.2)
            console.log(x + " " + y +" "+ z)

            fish.setAttribute("id",`fish_${i}`)

            fish.setAttribute("position",{
                x: x,
                y: y,
                z: z
            })

            fish.setAttribute("scale",{
                x: 1,
                y: 1,
                z: 1
            })

            fish.setAttribute("static-body")
            
            var coin = document.createElement("a-entity")

            coin.setAttribute("geometry",{
                primitive : "cylinder",
                radius : "0.05",
                height : "0.005"
            })

            coin.setAttribute("material",{
                src : "./coin.png",
                color : "yellow"
            })

            coin.setAttribute("position",{
                x: 0,
                y: -0.1,
                z: 0
            })

            coin.setAttribute("rotation",{
                x:90,
                y:0,
                z:0
            })

            coin.setAttribute("static-body")

            coin.setAttribute("id",`coin_${i}`)

            coin.setAttribute("animation",{
                property : "rotation",
                to : "90 0 360",
                loop : "true",
                easing : "linear",
                dur : "10000"
            })

            var scene = document.querySelector("#terrain")

            fish.appendChild(coin)
            scene.appendChild(fish)

        }
    }
})
