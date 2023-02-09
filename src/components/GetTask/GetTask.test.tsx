import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from '../../app/redux/store'

import GetTask from './index'

describe("GetTask", () => {

    beforeEach(() => {
        render(
            <Provider store={setupStore()}>
                <GetTask />
            </Provider>
        )
    })
    
    test("Show Text label task", () => {
        expect(screen.findByText('Nro')).toBeDefined();
    })
})