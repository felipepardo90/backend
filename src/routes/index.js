const { Router } = require("express");
const router = Router(); //Router

const products = [
  {
    "title": "Vino",
    "price": "300",
    "thumbnail": "https://th.bing.com/th/id/OIP.g0ixKaeB_bc4CXJec1Kc9gHaEo?pid=ImgDet&rs=1",
    "id": 1
  },
  {
    "title": "Jugo natural",
    "price": "200",
    "thumbnail": "https://milrecetas.net/wp-content/uploads/2015/09/Jugos-Naturales-Recetas-1-scaled.jpg",
    "id": 2
  },
  {
    "title": "Cerveza",
    "price": "350",
    "thumbnail": "https://th.bing.com/th/id/OIP.Vm-hXlw_CUVzu5f_yhG4aAHaEU?pid=ImgDet&rs=1",
    "id": 3
  },
  {
    "title": "Agua mineral",
    "price": "150",
    "thumbnail": "https://www.hhg5.com/wp-content/uploads/2016/07/Qual-a-quantidade-de-%C3%A1gua-ideal-que-devo-beber1.jpg",
    "id": 4
  }
]

router.get("/", (req, res) => {

  try {
    
    res.render("layout/main.hbs");
  } catch (error) {
    console.log(`Error: ${error}`)
    res.sendStatus(500)
  }
});

router.get("/productos", (req,res)=>{
  res.render("products.hbs", {products})
})

module.exports = router;
