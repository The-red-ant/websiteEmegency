var map = tt.map({
    key: '<your-tomtom-maps-API-key>',
    container: 'map',
    dragPan: !isMobileOrTablet()
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());