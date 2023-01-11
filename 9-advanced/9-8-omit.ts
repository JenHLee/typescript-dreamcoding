{
    // Pick의 반대, Omit은 선택한 것을 뺀 나머지 값
   type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetaData = Omit<Video, 'url' | 'data'>;

    function getVideo1(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://..',
            data: 'byte-data...'
        }
    }

    function getVideoMetaData1(id: string): VideoMetaData {
        return {
            id: id,
            title: 'title',
            // url: 'url'
        }
    }
}