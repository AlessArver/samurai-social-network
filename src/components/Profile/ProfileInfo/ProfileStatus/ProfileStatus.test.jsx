import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
    test('<span> should be displayed after creation', () => {
        const component = create(<ProfileStatus status='status'/>)
        const instance = component.root
        expect(instance.props.status).toBe('status')
    })
    test('<input> shouldn\'t be displayed after creation', () => {
        const component = create(<ProfileStatus status='status'/>)
        const instance = component.root
        expect(() => {
            const input = instance.findByType('input')
        }).toThrow()
    })
    test('<span> should be contains correct status', () => {
        const component = create(<ProfileStatus status='status'/>)
        const instance = component.root
        const span = instance.findByType('span')
        expect(span.children[0]).toBe('status')
    })
    test('<input> should be displayed instead span', () => {
        const component = create(<ProfileStatus status='status'/>)
        const instance = component.root
        const span = instance.findByType('span')
        span.props.onDoubleClick()
        const input = instance.findByType('input')
        expect(input.props.value).toBe('status')
    })
    test('callback should be called', () => {
        const callback = jest.fn()
        const component = create(<ProfileStatus status='status' updateStatus={callback}/>)
        const instance = component.root
        instance.deactivateEdit()
        expect(callback.mock.calls.length).toBe(1)
    })
})