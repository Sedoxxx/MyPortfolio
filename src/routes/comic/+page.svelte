<script lang="ts">
  import { onMount } from 'svelte'
  import Comic from '../components/Comic/Comic.svelte'

  interface ComicData {
    safe_title: string
    alt: string
    img: string
    year: string
    month: string
    day: string
  }

  const email: string = 'm.daassi@innopolis.university'
  const urlSearchParams: URLSearchParams = new URLSearchParams({ email })
  const apiUrl: string = `https://fwd.innopolis.university/api/hw2?${urlSearchParams.toString()}`

  let safeTitle: string = ''
  let safeAlt: string = ''
  let comicImageSrc: string = ''
  let comicImageAlt: string = ''
  let comicDate: string = ''
  let comicFromNow: string = ''

  onMount(async () => {
    try {
      const response = await fetch(apiUrl)
      const data: string = (await response.json()) as string
      const comicId: string = data
      const comicUrl: string = `https://fwd.innopolis.university/api/comic?id=${comicId.toString()}`
      const comicResponse = await fetch(comicUrl)
      const comicData: ComicData = (await comicResponse.json()) as ComicData

      safeTitle = comicData.safe_title
      safeAlt = comicData.alt
      comicImageSrc = comicData.img
      comicImageAlt = comicData.alt

      const comicDateObj = new Date(
        parseInt(comicData.year),
        parseInt(comicData.month) - 1,
        parseInt(comicData.day)
      )
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }
      comicDate = comicDateObj.toLocaleDateString(undefined, options)

      const moment = await import('moment')
      const fromNow = moment.default(comicDateObj).fromNow()
      comicFromNow = `Comic released ${fromNow}`
    } catch (error) {
      console.log(error)
    }
  })
</script>

<body>
  <Comic
    title={safeTitle}
    img={comicImageSrc}
    imgAlt={comicImageAlt}
    alt={safeAlt}
    date={comicDate}
    fromNow={comicFromNow}
  />
</body>
