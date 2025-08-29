import { useEffect, useState, useRef } from 'react'
import './style.css'
import lixeira from '../../assets/imgLixeira.png.webp'
import api from '../../services/api'

function maskTelefone(value) {
  return value
    .replace(/\D/g, "") // só números
    .replace(/^(\d{2})(\d)/, "($1) $2") // DDD
    .replace(/(\d{5})(\d)/, "$1-$2") // traço
    .slice(0, 15) // limita
}

function maskCpf(value) {
  return value
    .replace(/\D/g, "") // só números
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14)
}

function handleTelefone(e) {
    e.target.value = maskTelefone(e.target.value)
}

function handleCpf(e) {
    e.target.value = maskCpf(e.target.value)
}

function cleanNumber(value) {
  return value.replace(/\D/g, ""); // remove tudo que não é número
}

function Register() {

const [users, setUsers] = useState([])

const inputNome = useRef()
const inputEmail = useRef()
const inputTelefone = useRef()
const inputCpf = useRef()
const inputSenha = useRef()
const inputConfirmSenha = useRef();


async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

  setUsers(usersFromApi.data)
  
}


async function postUsers(){

    if (
    !inputNome.current.value ||
    !inputEmail.current.value ||
    !inputTelefone.current.value ||
    !inputCpf.current.value ||
    !inputSenha.current.value
  ) {
    alert("Preencha todos os campos antes de cadastrar!")
    return
  }

if (inputSenha.current.value !== inputConfirmSenha.current.value) {
    alert("As senhas não coincidem!");
    return;
}


   await api.post('/usuarios', {
    nome: inputNome.current.value,
    email: inputEmail.current.value,
    telefone: cleanNumber(inputTelefone.current.value),
    cpf: cleanNumber(inputCpf.current.value),
    senha: inputSenha.current.value
   })

  getUsers()

  inputNome.current.value = ""
  inputEmail.current.value = ""
  inputTelefone.current.value = ""
  inputCpf.current.value = ""
  inputSenha.current.value = ""
  inputConfirmSenha.current.value = ""
}


async function deleteUsers(id_cliente){
  await api.delete(`/usuarios/${id_cliente}`)

  getUsers()

}

useEffect (() =>{

  getUsers()

}, [])



  return (
    
      <div className="paginaCadastro">

        <div className='vazio'></div>

        <main id="form_container">
            <div id="form_header">
              <h1 id="form_title">Cadastre-se</h1>
              <button className="btn-default" id="botaoVoltar">
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            </div>
            <form id="form">
              <div id="input_container">

                <div className="input-box">
                  <div className="input-field">
                    <input type="text" name="nome" id="name" className="form-control" ref={inputNome} placeholder='Nome'/>
                    <i className="fa-regular fa-user"></i>
                  </div>
                </div>

                <div className="input-box">
                  <div className="input-field">
                    <input type="email" name="email" id="email" className="form-control" ref={inputEmail} placeholder='Email'/>
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                </div>

                <div className="input-box">
                  <div className="input-field">
                    <input type="tel" name="telefone" id="telefone" className="form-control" ref={inputTelefone} onInput={handleTelefone} placeholder='Telefone'/>
                  </div>
                </div>

                <div className="input-box">
                  <div className="input-field">
                    <input type="text" name="cpf" id="cpf" className="form-control" ref={inputCpf} onInput={handleCpf} placeholder='CPF'/>
                  </div>
                </div>

                <div className="input-box">
                  <div className="input-field">
                    <input type="password" name="password" id="password" className="form-control" placeholder='Senha' ref={inputSenha}/>
                    <i className="fa-regular fa-eye-slash password-icon"></i>
                  </div>
                </div>

                <div className="input-box">
                  <div className="input-field">
                    <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder='Repita a senha' ref={inputConfirmSenha}/>
                    <i className="fa-regular fa-eye-slash password-icon"></i>
                  </div>
                </div>
              </div>
              <button type="button" className="btn-default" id="botaoCadastrar" onClick={postUsers}>Finalizar Cadastro</button>
            </form>
        </main>

        <div className="card_info_users">

        { users.map( (user) => (
          <div className='info_user'>
            <div key={user.id_cliente}>
              <p><span className='font_bold'>Nome:</span> {user.nome}</p>
              <p><span className='font_bold'>Email:</span> {user.email}</p>
              <p><span className='font_bold'>Telefone:</span> {user.telefone}</p>
              <p><span className='font_bold'>CPF:</span> {user.cpf}</p>
            </div>
            <button onClick={() => deleteUsers(user.id_cliente)} className='btn_apagar_user'>
              <img src={lixeira} alt="Lixeira"/>
            </button>
          </div>
        ))}

        </div>

      </div>



  )
}

export default Register
