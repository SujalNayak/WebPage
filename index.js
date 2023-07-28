import { createClient } from 'pexels';

const client = createClient('YOUR_API_KEY');
const query = 'Nature';

client.videoes.search({ query, per_page: 1 }).then(videos => {});
{
    "page": 1,
    "per_page": 1,
    "total_results": 20475,
    "url": "https://www.pexels.com/videos/",
    "videos": [
      {
        "id": 1448735,
        "width": 4096,
        "height": 2160,
        "url": "https://www.pexels.com/video/video-of-forest-1448735/",
        "image": "https://images.pexels.com/videos/1448735/free-video-1448735.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb",
        "duration": 32,
        "user": {
          "id": 574687,
          "name": "Ruvim Miksanskiy",
          "url": "https://www.pexels.com/@digitech"
        },
        "video_files": [
          {
            "id": 58649,
            "quality": "sd",
            "file_type": "video/mp4",
            "width": 640,
            "height": 338,
            "link": "https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761"
          },
          {
            "id": 58650,
            "quality": "hd",
            "file_type": "video/mp4",
            "width": 2048,
            "height": 1080,
            "link": "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761"
          },
          {
            "id": 58651,
            "quality": "hd",
            "file_type": "video/mp4",
            "width": 4096,
            "height": 2160,
            "link": "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=172&oauth2_token_id=57447761"
          },
          {
            "id": 58652,
            "quality": "hd",
            "file_type": "video/mp4",
            "width": 1366,
            "height": 720,
            "link": "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=174&oauth2_token_id=57447761"
          },
          {
            "id": 58653,
            "quality": "hd",
            "file_type": "video/mp4",
            "width": 2732,
            "height": 1440,
            "link": "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=170&oauth2_token_id=57447761"
          },
          {
            "id": 58654,
            "quality": "sd",
            "file_type": "video/mp4",
            "width": 960,
            "height": 506,
            "link": "https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=165&oauth2_token_id=57447761"
          },
          {
            "id": 58655,
            "quality": "hls",
            "file_type": "video/mp4",
            "width": null,
            "height": null,
            "link": "https://player.vimeo.com/external/291648067.m3u8?s=1210fac9d80f9b74b4a334c4fca327cde08886b2&oauth2_token_id=57447761"
          }
        ],
        "video_pictures": [
          {
            "id": 133236,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-0.jpg",
            "nr": 0
          },
          {
            "id": 133237,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-1.jpg",
            "nr": 1
          },
          {
            "id": 133238,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-2.jpg",
            "nr": 2
          },
          {
            "id": 133239,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-3.jpg",
            "nr": 3
          },
          {
            "id": 133240,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-4.jpg",
            "nr": 4
          },
          {
            "id": 133241,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-5.jpg",
            "nr": 5
          },
          {
            "id": 133242,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-6.jpg",
            "nr": 6
          },
          {
            "id": 133243,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-7.jpg",
            "nr": 7
          },
          {
            "id": 133244,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-8.jpg",
            "nr": 8
          },
          {
            "id": 133245,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-9.jpg",
            "nr": 9
          },
          {
            "id": 133246,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-10.jpg",
            "nr": 10
          },
          {
            "id": 133247,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-11.jpg",
            "nr": 11
          },
          {
            "id": 133248,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-12.jpg",
            "nr": 12
          },
          {
            "id": 133249,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-13.jpg",
            "nr": 13
          },
          {
            "id": 133250,
            "picture": "https://static-videos.pexels.com/videos/1448735/pictures/preview-14.jpg",
            "nr": 14
          }
        ]
      }
    ]
  }
  