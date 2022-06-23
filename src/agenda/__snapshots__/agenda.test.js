import React from 'react';
import renderer from 'react-test-renderer';
import { ReactAgenda , ReactAgendaCtrl, guid, Modal } from 'react-agenda';
import Agenda from '../agenda'

test("Testes ", () => {

    test('Renderização', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Renderização de botão", () => {
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();
    });

    test("Texto esperado quando houver clique)", () => {
        const component = create(<Button text="" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });

});