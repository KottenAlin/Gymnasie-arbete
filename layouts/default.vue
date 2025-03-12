<template>
    <div>
    <header>
        <nav>

            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
        </nav>
    </header>
    <div>
        <slot />
    </div>
    <footer>
        <p>&copy; 2020</p>
    </footer>
</div>
</template>