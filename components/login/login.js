export function renderLogin() {
    return `
        <!-- Sección de Login -->
        <section style="box-shadow: 0 0 25px #000;" class="section-container element" id="login-section">
            <div class="section-header invert">
                <h2><span class="material-symbols-outlined">person</span> Iniciar Sesión</h2>
                <p class="section-subtitle">Accede a tu cuenta para guardar tus pares favoritos</p>
            </div>
            <div class="login-container">
                <form class="login-form invert" id="loginForm">
                    <div class="form-group">
                        <label for="username">Usuario o Email</label>
                        <div class="input-with-icon">
                            <span class="material-symbols-outlined">person</span>
                            <input type="text" id="username" class="shadow-invert" placeholder="tu@email.com" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <div class="input-with-icon">
                            <span class="material-symbols-outlined">lock</span>
                            <input type="password" class="shadow-invert" id="password" placeholder="Ingresa tu contraseña" required>
                            <button type="button"  class="show-password">
                                <span class="material-symbols-outlined" id="showPassword">visibility</span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="remember">
                            <span class="checkmark"></span>
                            Recordarme
                        </label>
                        <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>
                    
                    <button type="submit" class="submit-button shadow-invert">
                        <span class="material-symbols-outlined">login</span>
                        Ingresar
                    </button>
                    
                    <div class="form-footer">
                        <p>¿No tienes cuenta? <a href="#" id="registerLink">Regístrate aquí</a></p>
                    </div>
                </form>
            </div>
        </section>
    `;
}

export function initLoginLogic() {
    const passwordVisibleButton = document.getElementById('showPassword');
    if (passwordVisibleButton) {
        passwordVisibleButton.addEventListener('click', () => {
            const password = document.getElementById('password');
            const type = password.getAttribute('type');
            if (type === 'password') {
                password.setAttribute('type', 'text');
            } else if (type === 'text') {
                password.setAttribute('type', 'password');
            }
        });
    }
}
