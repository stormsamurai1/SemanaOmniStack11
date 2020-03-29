import React from 'react'
import { Link } from 'react-router-dom'

import './Profile.css'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span> Bem vinda, APAD</span>
            
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1> Casos Cadastrados </h1>
            
            <ul>
                <li>
                    <strong>Caso: </strong>
                    <p> Caso teste </p>
                
                    <strong> Descrição: </strong>
                    <p> Descrição teste </p>

                    <strong> Valor: </strong>
                    <p> Valor teste </p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a823"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}