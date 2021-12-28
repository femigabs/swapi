import { expect } from 'chai';
import * as Helpers from '../../src/utils/helpers/helpers';
import movieResponse from '../mock/swapi.get.movies.mock.response.json';
import characterResponse from '../mock/swapi.get.character.mock.response.json';

describe('Helpers', () => {
    describe('Get ArrayId Helper', () => {
      it('getArrayId', () => {
        const result = Helpers.getArrayId(movieResponse.results);
        expect(result).to.be.an('array');
      });
    });

    describe('Add Comment Count To Movies Helper', () => {
        it('addCommentCountToMovies', () => {
            const commentCount = [ { episode_id: 2, total: '1' } ];
            const result = Helpers.addCommentCountToMovies(movieResponse.results, commentCount);
            expect(result).to.be.an('array');
        });
    });

    describe('Sort Array By Date Helper', () => {
        it('sortArrayByDate', () => {
          const result = Helpers.sortArrayByDate(movieResponse.results);
          expect(result[0].release_date).to.equal('2005-05-19');
        });
    });

    describe('Filter Data Helper', () => {
        it('filterData', () => {
          const result = Helpers.filterData(movieResponse.results);
          expect(result[0]).to.have.property('episode_id');
          expect(result[0]).to.have.property('title');
          expect(result[0]).to.have.property('opening_crawl');
          expect(result[0]).to.have.property('release_date');
        });
    });

    describe('Compare And Sort Array Helper', () => {
        it('compareAndSortData By height', () => {
            const result = Helpers.compareAndSortData(
              characterResponse.results, 'height', 'desc'
            );
          expect(result).to.be.an('array');
        });

        it('compareAndSortData By gender', () => {
            const result = Helpers.compareAndSortData(
            characterResponse.results, 'name', 'asc'
            );
            expect(result[0].name).to.equal('Beru Whitesun lars');
        });

        it('compareAndSortData with wrong key', () => {
            const result = Helpers.compareAndSortData(
            characterResponse.results, 'sex', 'asc'
            );
            expect(result).to.be.an('array');
        });
    });

    describe('Filter By Single Data Helper', () => {
        it('filterBySingleData', () => {
            const result = Helpers.filterBySingleData(
              movieResponse.results, 'gender', 'male'
            );
            expect(result).to.be.an('array');
        });
    });

    describe('Calculate Height Helper', () => {
        it('calculateHeight', () => {
          const result = Helpers.calculateHeight(characterResponse.results);
          expect(result.count).to.equal(10);
        });
      });
});