// auth.js

export function login(usuario, contraseña) {
    // Aquí va tu lógica de inicio de sesión
    // Por ejemplo, hacer una solicitud HTTP para iniciar sesión
    return new Promise((resolve, reject) => {
      // Simulando una solicitud de inicio de sesión
      setTimeout(() => {
        if (usuario === 'usuario' && contraseña === 'contraseña') {
          resolve({ usuario: usuario });
        } else {
          reject(new Error('Credenciales inválidas'));
        }
      }, 1000); // Simular una espera de 1 segundo
    });
  }