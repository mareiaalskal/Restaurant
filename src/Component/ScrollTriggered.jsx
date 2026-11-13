import { motion } from "framer-motion"

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map((item, i) => (
    <Card
        i={i}
        name={item.name}
        image={item.image}
        key={item.name}
    />
))}
        </div>
    )
}

function Card({ name, image, i }) {

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <motion.div
                style={card}
                variants={cardVariants}
                className="card"
            >
                <img
                    src={image}
                    alt={name}
                    style={foodImage}
                />

                <h3 style={foodName}>
                    {name}
                </h3>

            </motion.div>
        </motion.div>
    )
}



const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const colors = [
    "#D8B99A",
    "#B8875B",
    "#E8D5BF",
    "#8B6045",
    "#C49A75",
]

const hue = (h) => colors[Math.floor(h / 60) % colors.length]

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    width: 350,
    minHeight: 430,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#F5EFE6",
    boxShadow: "0 4px 20px rgba(80, 50, 30, 0.12)",
}

const foodImage = {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: "16px",
}

const foodName = {
    color: "#493326",
    fontSize: "24px",
    marginTop: "15px",
    textAlign: "center",
}

/**
 * ==============   Data   ================
 */

const food = [
    {
        name: "Italian Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
        name: "Classic Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        name: "Italian Pasta",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
    },
    {
    name: "Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
},
    {
        name: "Delicious Chicken",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435"
    }
]