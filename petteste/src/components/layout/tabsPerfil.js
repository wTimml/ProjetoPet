import React from 'react'
import M from 'materialize-css'
import PetsList from '../project/petsList'
import { Pets } from '../project/pets'


class tabsPerfil extends React.Component {

    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var el = document.querySelectorAll('.tabs');
            var instance = M.Tabs.init(el, {
                swipeable: true,
            }
            );
            
    })


            return (

                <div class="row">
                    <div class="col s12 ">
                        <ul id="tabs-swipe-demo " class="tabs">
                            <li class="tab col s4"><a href="#test-swipe-1">Animais Cadastrados</a></li>
                            <li class="tab col s4"><a class="active" href="#test-swipe-2">Animais Adotados</a></li>
                            <li class="tab col s4"><a href="#test-swipe-3">Test 3</a></li>
                        </ul>
                        <div id="test-swipe-1" class="col s12 ">
                            <PetsList pets={Pets}/>

                        </div>
                        <div id="test-swipe-2" class="col s12 ">Animais Adotados</div>
                        <div id="test-swipe-3" class="col s12 ">Test 3</div>
                    </div>
                </div>
            )
        }
    }

export default tabsPerfil