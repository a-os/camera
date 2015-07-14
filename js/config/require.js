requirejs.config({
  baseUrl: '/js',

  // 'paths' lets us alias complex
  // paths to something simpler.
  paths: {
    'l10n': '../shared/js/l10n',
    'l10n_date': '../shared/js/l10n_date',
    'asyncStorage': '../shared/js/async_storage',
    'getVideoRotation': '../shared/js/media/get_video_rotation',
    'jpegMetaDataParser': '../shared/js/media/jpeg_metadata_parser',
    'downsample': '../shared/js/media/downsample',
    'getImageSize': '../shared/js/media/image_size',
    'cropResizeRotate': '../shared/js/media/crop_resize_rotate',
    'format': '../shared/js/format',
    'GestureDetector': '../shared/js/gesture_detector',
    'VideoPlayer': '../shared/js/media/video_player',
    'MediaFrame': '../shared/js/media/media_frame',
    'BlobView': '../shared/js/blobview',
    'CustomDialog': '../shared/js/custom_dialog',
    'debug': '../shared/debug/index',
    'attach': '../shared/attach/index',
    'model': '../shared/model/index',
    'view': '../shared/view/index',
    'evt': '../shared/evt/index',
    'drag': '../shared/drag/index',
    'device-orientation': '../shared/device-orientation/index',
    'stop-recording-event': '../shared/js/stop_recording_event'
  },

  // If your package uses relative `require()` paths
  // internally, then it needs to be defined as
  // a 'package' so they are resolved correctly.
  packages: [
    {
      name: 'gaia-header',
      location: '../shared/gaia-header',
      main: 'gaia-header'
    },
    {
      name: 'gaia-icons',
      location: '../shared/gaia-icons',
      main: 'gaia-icons'
    },
    {
      name: 'gaia-component',
      location: '../shared/gaia-component',
      main: 'gaia-component'
    }
  ],

  // 'shim' config lets us `require()` packages
  // that don't have an AMD define call.
  shim: {
    'format': {
      exports: 'Format'
    },
    'getVideoRotation': {
      deps: ['BlobView'],
      exports: 'getVideoRotation'
    },
    'MediaFrame': {
      deps: ['format', 'VideoPlayer', 'l10n_date'],
      exports: 'MediaFrame'
    },
    'BlobView': {
      exports: 'BlobView'
    },
    'asyncStorage': {
      exports: 'asyncStorage'
    },
    'jpegMetaDataParser': {
      deps: ['BlobView'],
      exports: 'parseJPEGMetadata'
    },
    'getImageSize': {
      deps: ['BlobView', 'jpegMetaDataParser'],
      exports: 'getImageSize'
    },
    'cropResizeRotate': {
      deps: ['BlobView', 'getImageSize', 'jpegMetaDataParser', 'downsample'],
      exports: 'cropResizeRotate'
    },
    'GestureDetector': {
      exports: 'GestureDetector'
    },
    'CustomDialog': {
      exports: 'CustomDialog'
    },
    'stop-recording-event': {
      exports: 'StopRecordingEvent'
    }
  }
});
