import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { defineFeature, loadFeature } from 'jest-cucumber'
import Links from '../index'

const feature = loadFeature('src/components/generic/links/features/links.feature')

defineFeature(feature, (test) => {
  test('Add array of link objects', ({ when, then }) => {
    const component = renderer.create(
      <Links
        items={[
          { path: '/', name: 'Home' },
          { path: '/about', name: 'About' }
        ]}
      />
    )

    when('I provide the link objects', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
    then('The links should be generated', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
