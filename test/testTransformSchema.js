/* eslint-disable max-nested-callbacks */
const assert = require('assert')
const rewire = require('rewire')
const fixture = require('./fixtures/contentful-export.json')

const transformSchema = rewire('../src/transformSchema.js')

describe('transformSchema', () => {
  describe('determineAssetRefType', () => {
    const determineAssetRefType = transformSchema.__get__('determineAssetRefType')
    it('should determine asset type based on real content if no mime validation', () => {
      const doc = fixture.contentTypes.find(item => item.sys.id === 'blogPost')
      const imageField = doc.fields.find(field => field.id === 'heroImage')
      const result = determineAssetRefType(imageField, fixture)
      assert.strictEqual(result.type, 'image')
    })
  })
})
