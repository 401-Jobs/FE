import React from 'react'
import './Cards.css'
import { data } from './data'

const Cards = () => {
  return (
    <div class='row text-center containerr'>
      {data.map((card) => {
        return (
          <div class='col-xl-3 col-sm-6 mb-5'>
            <div class='bg-white rounded shadow-sm py-5 px-6'>
              <img
                src='https://bootstrapious.com/i/snippets/sn-about/avatar-4.png'
                alt=''
                width='100'
                class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
              />
              <h5 class='mb-0'>{card.name}</h5>
              <span class='small text-uppercase text-muted'>
                {card.Specialization}
              </span>
              <ul class='social mb-0 list-inline mt-3'>
                <li class='list-inline-item'>
                  <a href={card.facebook} class='social-link'>
                    <i class='fa fa-facebook-f' style={{color:'grey'}}></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href={card.github} class='social-link'>
                    <i class='fa fa-github' style={{color:'grey'}}></i>
                  </a>
                </li>
                <li class='list-inline-item'>
                  <a href={card.linkedIn} class='social-link'>
                    <i class='fa fa-linkedin' style={{color:'grey'}}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
