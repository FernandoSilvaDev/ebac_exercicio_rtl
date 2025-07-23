import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "Carro irado!" na lista', () => {
  render(<Post />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Carro irado!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    expect(screen.getByText('Carro irado!')).toBeInTheDocument()
  })

  test('Deve adicionar "Vou comprar para o meu filho" na lista', () => {
  render(<Post />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Vou comprar para o meu filho!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    expect(screen.getByText('Vou comprar para o meu filho!')).toBeInTheDocument()
  })
});