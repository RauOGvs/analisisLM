import React from 'react'

class FormRegister extends React.Component{
    constructor(args){
        super(args)
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <div id="div-center" class="center">
                    <h1>Guardar nuevo producto</h1>
                
                <table id="table">
                    <tr>
                        <td>
                            <label htmlFor="empresaText">Empresa: </label>
                        </td>
                        <td>
                        <input type="text" name="empresa" id="empresa"/>
                        </td>
                        <td>
                            <label htmlFor="productoTex">Producto: </label>
                        </td>
                        <td>
                        <input type="text" name="producto" id="producto"/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label htmlFor="tituloTex">Titulo: </label>
                        </td>
                        <td>
                        <input type="text" name="titulo" id="titulo"/>
                        </td>
                        <td>
                            <label htmlFor="descripcion">Descripción: </label>
                        </td>
                        <td>
                        <input type="text" name="descripcion" id="descripcion"/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label htmlFor="precioText">Precio: </label>
                        </td>
                        <td>
                        <input type="text" name="precio" id="precio"/>
                        </td>
                        <td>
                            <label htmlFor="imagen">Imagen: </label>
                        </td>
                        <td>
                        <input type="text" name="imagen" id="imagen"/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label htmlFor="moneda">Moneda: </label>
                        </td>
                        <td>
                        <input type="text" name="moneda" id="moneda"/>
                        </td>
                        <td>
                            <label htmlFor="inserText">Guardar: </label>
                        </td>
                        <td>
                        <input type="submit" name="imagen" id="imagen"/>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        );
    }
}

export default FormRegister;
