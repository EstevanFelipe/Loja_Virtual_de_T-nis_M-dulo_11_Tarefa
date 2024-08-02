document.addEventListener('DOMContentLoaded', function() {
    const cardSection = document.getElementById('carrinho-compras');
    const cardItemsContainer = document.querySelector('.card-items');
    const addToCardButtons = document.querySelectorAll('.add-to-card');

    addToCardButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Mostrar a seção do carrinho
            cardSection.style.display = 'block';

            // Clonar o card do produto
            const card = this.closest('.card').cloneNode(true);

            // Remover o botão "Adicionar ao Carrinho" do card clonado
            const addToCardButton = card.querySelector('.add-to-card');
            if (addToCardButton) {
                addToCardButton.remove();
            }

            // Adicionar o card clonado ao container do carrinho
            cardItemsContainer.appendChild(card);
        });
    });
});
