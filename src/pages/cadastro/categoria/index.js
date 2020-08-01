import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const initialValues = {
        name: '', 
        description: '', 
        color:'#000000'
    }
    const [categories, setCategory] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key,value){
        setValues({
            ...values,
            [key]:value
        })
    }
    function handleChange(event){
        // const { getAttribute, value } = event.target;
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(event) =>{
                event.preventDefault()
                setCategory([...categories,values])
                setValues(initialValues)
            }}>
                <FormField 
                label="Nome da Categoria:"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                />
                <div>
                    <label>
                        Descrição:
                        <input 
                        type="textarea"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <FormField 
                label="Cor:"
                type="color"
                name="color"
                value={values.color}
                onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Cor:
                        <input 
                        type="color"
                        name="color"
                        value={values.color}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category}${index}`}>
                            Nome: {category.name}, Descrição: {category.description}, cor: {category.color}
                        </li>
                    )}
                )}
            </ul>

            <Link to="/cadastro/video">
                Voltar
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;