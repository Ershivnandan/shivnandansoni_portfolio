import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2024-01-01'
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false
})