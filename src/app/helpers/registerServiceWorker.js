const displayUpdateNotification = () => {
  const shouldUpdate = (
    process.env.FORCE_UPDATE === 'true' ||
    confirm('New content is available!. \n\nClick OK to refresh')
  )
  if (shouldUpdate) {
    console.log('Loading new content...')
    window.location.reload()
  }
}

export default function registerServiceWorker () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          registration.onupdatefound = () => {
            console.log('SW registered: ', registration)
            const installingWorker = registration.installing
            installingWorker.onstatechange = () => (
              installingWorker.state === 'installed' &&
              navigator.serviceWorker.controller &&
              displayUpdateNotification()
            )
          }
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}
