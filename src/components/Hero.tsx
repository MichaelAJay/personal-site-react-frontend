import './Hero.css'

function Hero({ children } : any) {
    return (
        <div className="hero">
            {children}
        </div>
    )
}

export default Hero;