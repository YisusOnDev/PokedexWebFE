window.pokemonBoxTemplate =
    '<div class="row">' +
    '{{#pokemons}}' +
    '<div class="col-sm-6">' +
    '<div class="panel">' +
    '<div class="panel-body p-t-10">' +
    '<div class="media-main">' +
    '<a class="pull-left">' +
    '<img class="thumb-lg img-circle bx-s"' +
    'src="{{imageUrl}}" alt="">' +
    '</a>' +
    '<div class="pull-right btn-group-sm">' +
    '<a class="btn btn-info tooltips" data-url="{{soundUrl}}" data-placement="top" data-toggle="tooltip" data-original-title="Sound" onclick="playSoundFromUrl(this)">' +
    '<i class="fa fa-music"></i>' +
    ' </a>&nbsp;' +
    '<a href="#" class="btn btn-success tooltips" data-pokemonid="{{id}}" data-placement="top" data-toggle="tooltip" data-original-title="Edit" onclick="promptEdit(this)">' +
    '<i class="fa fa-pencil"></i>' +
    '</a>&nbsp;' +
    '<a class="btn btn-danger tooltips pokeDelete" data-pokemonid="{{id}}" data-placement="top" data-toggle="tooltip" data-original-title="Delete" onclick="confirmDialog(this)">' +
    '<i class="fa fa-close"></i>' +
    '</a>' +
    '</div>' +
    '<div class="info">' +
    '<h4>{{name}}</h4>' +
    '<p class="text-muted">{{description}}</p>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '<hr>' +
    '<ul class="list p-b-10">' +
    '<li>' +
    '<div>Altura: {{height}} metros</div>' +
    '</li>' +
    '<li>' +
    '<div>Categoría: {{category}}</div>' +
    '</li>' +
    '<li>' +
    '<div>Peso: {{weight}} kg</div>' +
    '</li>' +
    '<li>' +
    '<div>Habilidad: {{ability}}</div>' +
    '</li>' +
    '<li>' +
    '<div>Tipo(s): {{types}}</div>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '{{/pokemons}}' +
    '</div>';
window.editPokemonPromptTemplate =
    '<div class="modal" id="editPokemonPrompt" tabindex="-1" role="dialog" style="display: none;">' +
    '<div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title">Editando a: {{name}}</h5>' +
    '</button>' +
    '</div>' +
    '<div class="modal-body">' +
    '<div class="alert alert-danger error-alert" style="display: none;"></div>' +
    '<div class="alert alert-success ok-alert" style="display: none;"></div>' +
    '<div class="alert alert-info info-alert" style="display: none;"></div>' +
    '<label for="pokeName">Nombre: &nbsp;</label>' +
    '<input type="text" id="pokeName" name="pokeName" value="{{name}}">' +
    '<br>' +
    '<label for="pokeDesc">Descripción: &nbsp;</label>' +
    '<input type="text" id="pokeDesc" name="pokeDesc" value="{{description}}">' +
    '<br>' +
    '<label for="pokeHeight">Altura: &nbsp;</label>' +
    '<input type="text" id="pokeHeight" name="pokeHeight" value="{{height}}">' +
    '<br>' +
    '<label for="pokeCat">Categoria: &nbsp;</label>' +
    '<input type="text" id="pokeCat" name="pokeCat" value="{{category}}">' +
    '<br>' +
    '<label for="pokeWeight">Peso: &nbsp;</label>' +
    '<input type="text" id="pokeWeight" name="pokeWeight" value="{{weight}}">' +
    '<br>' +
    '<label for="pokeAbility">Habilidad: &nbsp;</label>' +
    '<input type="text" id="pokeAbility" name="pokeAbility" value="{{ability}}">' +
    '<br>' +
    '<label for="pokeTypes">Tipo(s): &nbsp;</label>' +
    '<input type="text" id="pokeTypes" name="pokeTypes" value="{{types}}">' +
    '<br>' +
    '<label for="pokeImg">URL de Imagen: &nbsp;</label>' +
    '<input type="text" id="pokeImg" name="pokeImg" value="{{imageUrl}}">' +
    '<br>' +
    '<label for="pokeSound">URL de Sonido: &nbsp;</label>' +
    '<input type="text" id="pokeSound" name="pokeSound" value="{{soundUrl}}">' +
    '<br>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-primary" onclick="modifyPokemon()">Aplicar</button>' +
    '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="disableEditPrompt()">Cancelar/Cerrar</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
window.insertPokemonPromptTemplate =
    '<div class="modal" id="insertPokemonPrompt" tabindex="-1" role="dialog" style="display: none;">' +
    '<div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title">Insertar nuevo pokemon</h5>' +
    '</button>' +
    '</div>' +
    '<div class="modal-body">' +
    '<div class="alert alert-danger error-alert" style="display: none;"></div>' +
    '<div class="alert alert-success ok-alert" style="display: none;"></div>' +
    '<div class="alert alert-info info-alert" style="display: none;"></div>' +
    '<label for="pokeInsertName">Nombre: &nbsp;</label>' +
    '<input type="text" id="pokeInsertName" name="pokeInsertName" value="">' +
    '<br>' +
    '<label for="pokeInsertDesc">Descripción: &nbsp;</label>' +
    '<input type="text" id="pokeInsertDesc" name="pokeInsertDesc" value="">' +
    '<br>' +
    '<label for="pokeInsertHeight">Altura: &nbsp;</label>' +
    '<input type="text" id="pokeInsertHeight" name="pokeInsertHeight" value="">' +
    '<br>' +
    '<label for="pokeInsertCat">Categoria: &nbsp;</label>' +
    '<input type="text" id="pokeInsertCat" name="pokeInsertCat" value="">' +
    '<br>' +
    '<label for="pokeInsertWeight">Peso: &nbsp;</label>' +
    '<input type="text" id="pokeInsertWeight" name="pokeInsertWeight" value="">' +
    '<br>' +
    '<label for="pokeInsertAbility">Habilidad: &nbsp;</label>' +
    '<input type="text" id="pokeInsertAbility" name="pokeInsertAbility" value="">' +
    '<br>' +
    '<label for="pokeInsertTypes">Tipo(s): &nbsp;</label>' +
    '<input type="text" id="pokeInsertTypes" name="pokeInsertTypes" value="">' +
    '<br>' +
    '<label for="pokeInsertImg">URL de Imagen: &nbsp;</label>' +
    '<input type="text" id="pokeInsertImg" name="pokeInsertImg" value="">' +
    '<br>' +
    '<label for="pokeInsertSound">URL de Sonido: &nbsp;</label>' +
    '<input type="text" id="pokeInsertSound" name="pokeInsertSound" value="">' +
    '<br>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-primary" onclick="insertPokemon()">Insertar</button>' +
    '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="disableInsertPrompt()">Cancelar/Cerrar</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

var view;
var currentPokeEditId = -1;

$(document).ready(function () {
    fillPokemonCards();

    $("#pokeSearchButton").click(function () {
        filterAllPokemons();
    });

    $("#pokeAddButton").click(function () {
        promptInsert();
    });
});

function fillPokemonCards() {
    $.ajax({
        url: 'https://localhost:44308/api/Pokemon/getallpokemon',
        type: 'post',
        success: function (response) {
            showCardAlbum(response.data);
        }
    });
}

function showCardAlbum(dbData) {
    view = JSON.parse(JSON.stringify(dbData));
    let albumObj = $(Mustache.render(window.pokemonBoxTemplate, { pokemons: view }))[0];
    $(".pokelist").empty();
    $(".pokelist").append(albumObj);
    $(".pokelist").show();
}

function playSoundFromUrl(id) {
    var audio = new Audio($(id).data('url'));
    audio.volume = 0.5;
    audio.play();
}

function filterAllPokemons() {
    var input = document.getElementById("pokeSearch");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('col-sm-6');

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "block";
        } else {
            nodes[i].style.display = "none";
        }
    }
}

function promptEdit(id) {
    let pokeId = $(id).data('pokemonid');
    currentPokeEditId = pokeId;
    let current;
    view.forEach(element => {
        if (element.id == pokeId) {
            current = element;
        }
    });
    let obj = $(Mustache.render(window.editPokemonPromptTemplate, current))[0];
    $(".pokeEditPrompt").empty();
    $(".pokeEditPrompt").append(obj);
    $(".pokeEditPrompt").show();
    $('#editPokemonPrompt').fadeIn(1000);
}

function promptInsert() {
    let current;
    let obj = $(Mustache.render(window.insertPokemonPromptTemplate, current))[0];
    $(".pokeInsertPrompt").empty();
    $(".pokeInsertPrompt").append(obj);
    $(".pokeInsertPrompt").show();
    $('#insertPokemonPrompt').fadeIn(1000);
}

function disableEditPrompt() {
    currentPokeEditId = -1;
    $('#editPokemonPrompt').fadeOut(0);
    $(".pokeEditPrompt").empty();
}

function disableInsertPrompt() {
    currentPokeEditId = -1;
    $('#insertPokemonPrompt').fadeOut(0);
    $(".pokeInsertPrompt").empty();
}

function confirmDialog(id) {
    let pokeId = $(id).data('pokemonid');
    bootbox.confirm({
        title: "Borrar Pokemon",
        message: "¿Seguro que quieres borrar a este Pokemon? Esta acción no se puede revertir.",
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> Cancelar'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> Confirmar'
            }
        },
        callback: function (result) {
            if (result) {
                deletePokemon(pokeId);
            }
        }
    });
}

function deletePokemon(pokeId) {
    $.ajax({
        url: 'https://localhost:44308/api/Pokemon/deletepokemon',
        type: 'DELETE',
        data: JSON.stringify({ id: pokeId }),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            if (response.success) {
                fillPokemonCards();
            } else if (!response.success) {
                switch (response.exceptionMessage) {
                    case "IdNotExist": {
                        $(".alert-danger").text("The pokemon you tried to delete does not exist in the database.").fadeIn(2000);
                        $(".alert-danger").text("The pokemon you tried to delete does not exist in the database.").fadeOut(1000);
                        break;
                    }
                    default: {
                        $(".alert-danger").text("Error, please try again later").fadeIn(2000);
                        $(".alert-danger").text("Error, please try again later").fadeOut(1000);
                        break;
                    }
                }
            }
        }
    });
}

function modifyPokemon() {
    if (currentPokeEditId != -1) {
        let name = document.getElementById("pokeName").value;
        let description = document.getElementById("pokeDesc").value;
        let height = document.getElementById("pokeHeight").value;
        let category = document.getElementById("pokeCat").value;
        let weight = document.getElementById("pokeWeight").value;
        let ability = document.getElementById("pokeAbility").value;
        let types = document.getElementById("pokeTypes").value;
        let imageUrl = document.getElementById("pokeImg").value;
        let soundUrl = document.getElementById("pokeSound").value;
        if (isValidNumber(height) && isValidNumber(weight)) {
            testImage(imageUrl).then((msg) => {
                if (msg == "success") {
                    if (testSound(soundUrl)) {
                        if (isValidString(name) && isValidString(description) && isValidString(category) && isValidString(ability) && isValidString(types)) {
                            callModifyPokemon(currentPokeEditId, name, description, height, category, weight, ability, types, imageUrl, soundUrl);
                        } else {
                            $(".alert-danger").text("Values cannot be empty").fadeIn(2000);
                            $(".alert-danger").text("Values cannot be empty").fadeOut(1000);
                        }
                    } else {
                        $(".alert-danger").text("Sound URL invalid").fadeIn(2000);
                        $(".alert-danger").text("Sound URL invalid").fadeOut(1000);
                    }
                } else {
                    $(".alert-danger").text("Image URL invalid").fadeIn(2000);
                    $(".alert-danger").text("Image URL invalid").fadeOut(1000);
                }
            })
        } else {
            $(".alert-danger").text("Height and weight must be float numbers").fadeIn(2000);
            $(".alert-danger").text("Height and weight must be float numbers").fadeOut(1000);
        }
    }
}

function callModifyPokemon(id, name, description, height, category, weight, ability, types, imageUrl, soundUrl) {
    $.ajax({
        url: 'https://localhost:44308/api/Pokemon/updatepokemon',
        type: 'PUT',
        data: JSON.stringify({ id: id, name: name, description: description, height: height, category: category, weight: weight, ability: ability, types: types, imageUrl: imageUrl, soundUrl: soundUrl}),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            if (response.success) {
                disableEditPrompt();
                fillPokemonCards();
                
            } else {
                $(".alert-danger").text("An error occured. Pleasy try again later.").fadeIn(2000);
                $(".alert-danger").text("An error occured. Pleasy try again later.").fadeOut(1000);
            }
        }
    });
}

function insertPokemon() {
    let name = document.getElementById("pokeInsertName").value;
    let description = document.getElementById("pokeInsertDesc").value;
    let height = document.getElementById("pokeInsertHeight").value;
    let category = document.getElementById("pokeInsertCat").value;
    let weight = document.getElementById("pokeInsertWeight").value;
    let ability = document.getElementById("pokeInsertAbility").value;
    let types = document.getElementById("pokeInsertTypes").value;
    let imageUrl = document.getElementById("pokeInsertImg").value;
    let soundUrl = document.getElementById("pokeInsertSound").value;
    if (isValidNumber(height) && isValidNumber(weight)) {
        testImage(imageUrl).then((msg) => {
            if (msg == "success") {
                if (testSound(soundUrl)) {
                    if (isValidString(name) && isValidString(description) && isValidString(category) && isValidString(ability) && isValidString(types)) {
                        callInsertPokemon(name, description, height, category, weight, ability, types, imageUrl, soundUrl);
                    } else {
                        $(".alert-danger").text("No Values cannot be empty").fadeIn(2000);
                        $(".alert-danger").text("No Values cannot be empty").fadeOut(1000);
                    }
                } else {
                    $(".alert-danger").text("Sound URL invalid").fadeIn(2000);
                    $(".alert-danger").text("Sound URL invalid").fadeOut(1000);
                }
            } else {
                $(".alert-danger").text("Image URL invalid").fadeIn(2000);
                $(".alert-danger").text("Image URL invalid").fadeOut(1000);
            }
        })
    } else {
        $(".alert-danger").text("Height and weight must be float numbers").fadeIn(2000);
        $(".alert-danger").text("Height and weight must be float numbers").fadeOut(1000);
    }
}

function callInsertPokemon(name, description, height, category, weight, ability, types, imageUrl, soundUrl) {
    $.ajax({
        url: 'https://localhost:44308/api/Pokemon/insertpokemon',
        type: 'POST',
        data: JSON.stringify({ name: name, description: description, height: height, category: category, weight: weight, ability: ability, types: types, imageUrl: imageUrl, soundUrl: soundUrl}),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            if (response.success) {
                disableInsertPrompt();
                fillPokemonCards();
            } else {
                $(".alert-danger").text("An error occured. Pleasy try again later.").fadeIn(2000);
                $(".alert-danger").text("An error occured. Pleasy try again later.").fadeOut(1000);
            }
        }
    });
}

function isValidString(str) {
    return (!str == "");
}

function isValidNumber(n) {
    return (!isNaN(n) && n.toString().indexOf('.') != -1);
}

function testImage(url) {
    return new Promise(function (resolve, reject) {
        var timeout = 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            reject("error");
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve("success");
        };
        timer = setTimeout(function () {
            img.src = "//!!!!/noexist.jpg";
            reject("timeout");
        }, timeout);
        img.src = url;
    });
}

function testSound(url) {
    return (url.match(/\.(mp3|wav)$/) != null);
}