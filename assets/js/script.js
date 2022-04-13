// Crear clase Propietario
class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this._nombrePropietario = nombrePropietario;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño/a es ${this._nombrePropietario}. El domicilio es ${this._direccion}, y el número teléfonico de contacto es ${this._telefono}`;
    }
}

// Crear clase Animal que extiende clase Propietario
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un ${this._tipo}`;
    }
}

// Crear clase Mascota que extiende clase Animal
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nombreNuevoMascota) {
        this._nombreMascota = nombreNuevoMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad) {
        this.enfermedad = nuevaEnfermedad;
    }
}
window.onload = function () {
    let registrando = () => {
        // Array vacío para pushear datos más adelante
        let data = [];
        let nombrePropietario = document.getElementById('propietario').value;
        let telefono = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;
        let nombreMascota = document.getElementById('nombreMascota').value;
        let tipo = document.getElementById('tipo').value;
        let enfermedad = document.getElementById('enfermedad').value;
        // Crear instancia nuevo propietario
        var propietario = new Propietario(nombrePropietario, direccion, telefono);
        // Se hace push al array data con los datos del propietario
        data.push(propietario);
        // switch según tipo de mascota
        switch (tipo) {
            case 'perro':
                var perro = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                data.push(perro);
                break;
            case 'gato':
                var gato = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                data.push(gato);
                break;
            default:
                var conejo = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                data.push(conejo);
        }
        console.log(data);
        return data;
    }

    let registrar = document.getElementById('registrar');
    registrar.addEventListener('click', function (event) {
        event.preventDefault();
        const nuevaData = registrando();
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<ul><li>${nuevaData[0].datosPropietario()}</li><li>${nuevaData[1].tipo}, mientras que el nombre de la mascota es ${nuevaData[1]._nombreMascota} y la enfermedad es ${nuevaData[1]._enfermedad}</li></ul>`;
    });
}
