let icon = "<circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-width=\"2\"></circle>";

rtb.onReady(() => {
  rtb.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Hi',
        svgIcon: icon,
        onClick: async () => {
          alert('Hi!')
        }
      }
    }
  })
})
