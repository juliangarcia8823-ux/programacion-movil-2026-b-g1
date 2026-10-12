class Product(
    val id: Int,
    var name: String,
    var price: Double,
    var category: String,
    var stock: Int?
)

fun stockLabel(stock: Int?): String {
    return when {
        stock == null -> "Sin dato"
        stock == 0 -> "Agotado"
        stock < 5 -> "Pocas unidades"
        else -> "Disponible"
    }
}

fun applyDiscount(price: Double, percent: Int): Double {
    return price * (1.0 - (percent.toDouble() / 100.0))
}

fun main() {
    val p1 = Product(1, "Gaseosa 1.5L", 5000.0, "Bebidas", 10)
    val p2 = Product(2, "Papas Fritas", 2500.0, "Snacks", 3)
    val p3 = Product(3, "Jabón Líquido", 12000.0, "Aseo", null)

    val products = listOf(p1, p2, p3)

    println("=== CATÁLOGO KOTLIN ===")
    for (p in products) {
        val discountPrice = applyDiscount(p.price, 10)
        val label = stockLabel(p.stock)
        println("Producto: ${p.name} | Stock: $label \vert{} Precio Final (10\% Off):$$discountPrice")
    }
}
