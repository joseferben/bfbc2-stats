import expect from 'expect.js';

import ImageMapper from './ImageMapper.js';

describe('ImageMapper', () => {

    it('should return label all in lowercase', () => {
        expect(ImageMapper.mapToFileName('WHATEVER')).to.be('whatever');
    });

    it('should contain no hashtag symbol', () => {
        expect(ImageMapper.mapToFileName('WHAT#EVER 42')).to.be('what_ever_42');
    });

    it('should replace hashtag symbol with blank space', () => {
      expect(ImageMapper.mapToFileName('#')).to.be('_');
    });
});
