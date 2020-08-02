import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };
  const [categories, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  useEffect(() => {
    const URL = 'http://localhost:27017/categorias';
    fetch(URL)
      .then(async (res) => {
        const result = await res.json();
        setCategory([
          ...result,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategory([...categories, values]);
        setValues(initialValues);
      }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            Nome:
            {' '}
            {category.name}
            , Descrição:
            {category.description}
            , cor:
            {category.color}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Voltar
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
