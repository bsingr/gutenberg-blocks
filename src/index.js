import { blocks, data, i18n } from 'wp'
import * as imageBlock from './image'
import * as ctaBlock from './cta'
import * as imageSlideshow from './image_gallery'

const { registerBlockType } = blocks
const { dispatch, select } = data
const { __ } = i18n


// Category name and slug
const category = {
  slug: 'coliquio', // needs to match the css class of the block container: ".wp-block-coliquio-[block-name]"
  title: __('coliquio Blocks'),
}

// Register the new category and blocks
export function registerBlocks() {
  const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug)
  dispatch('core/blocks').setCategories([category, ...currentCategories])

  // registerBlockType(`${category.slug}/${imageBlock.name}`, { category: category.slug, ...imageBlock.settings })
  // registerBlockType(`${category.slug}/${ctaBlock.name}`, { category: category.slug, ...ctaBlock.settings })
  registerBlockType(`${category.slug}/${imageSlideshow.name}`, { category: category.slug, ...imageSlideshow.settings })
}

registerBlocks()
