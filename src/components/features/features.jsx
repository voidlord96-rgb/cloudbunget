function Feature() {
    return (
        <section className="features">
            <h2>Features</h2>
            <div className="container features__cards">
                <div className="features__card">
                    <div className="features__content">
                        <h3 className="features__title">Supports All Currencies and Cards</h3>
                        <p className="features__text">
                            We support all popular currencies and is fully customizable to
                            add
                        </p>
                        <a className="features__link" href="">Read More</a>
                    </div>
                </div>

                <div className="features__card">
                    <div className="features__content">
                        <h3 className="features__title">Manage your expenses on the go</h3>
                        <p className="features__text">
                            You can access your account from anywhere in the world on any
                            device
                        </p>
                        <a className="features__link" href="">Read More</a>
                    </div>
                </div>

                <div className="features__card">
                    <div className="features__content">
                        <h3 className="features__title">Cloud Budget Management Software</h3>
                        <p className="features__text">
                            Our software is made so you can access and manage your budget
                        </p>
                        <a className="features__link" href="">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;