import { expect } from 'chai';
import request from 'supertest';
import nock from 'nock';
import app from '../../index';
import characterResponse from '../mock/swapi.get.character.mock.response.json';

describe('Movies APIs', () => {
    describe('Nock', () => {
        afterEach((done) => {
          if (!nock.isDone()) {
            nock.cleanAll();
            done();
          }
        });
    });

    describe('Get Movies', () => {
        it('sort get characters by name', (done) => {
            nock('https://swapi.dev/api/people')
                .get('/')
                .reply(200, characterResponse);

                request(app)
                .get('/api/v1/characters')
                .query({
                    sort: 'name',
                    order: 'asc',
                    gender: 'male',
                })
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                  expect(res.body.status).to.equal('success');
                  expect(res.body.message).to.equal('Characters fetched successfully');
                  expect(res.body.data.characters).to.be.an('array');
                  expect(res.body.data.metadata).to.be.an('object');
                  done();
                });
        });

        it('sort get characters by height', (done) => {
            nock('https://swapi.dev/api/people')
                .get('/')
                .reply(200, characterResponse);

                request(app)
                .get('/api/v1/characters')
                .query({
                    sort: 'height',
                    order: 'desc',
                    gender: 'male',
                })
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                  expect(res.body.status).to.equal('success');
                  expect(res.body.message).to.equal('Characters fetched successfully');
                  expect(res.body.data.characters).to.be.an('array');
                  expect(res.body.data.metadata).to.be.an('object');
                  done();
                });
        });    
    });
});