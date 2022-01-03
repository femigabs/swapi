import { expect } from 'chai';
import request from 'supertest';
import nock from 'nock';
import app from '../../index';
import movieResponse from '../mock/swapi.get.movies.mock.response.json';

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
        it('should get movies', (done) => {
            nock('https://swapi.dev/api/films')
                .get('/')
                .reply(200, movieResponse);

                request(app)
                .get('/api/v1/movies')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                  expect(res.body.status).to.equal('success');
                  expect(res.body.message).to.equal('Movies fetched successfully');
                  expect(res.body.data).to.be.an('array');
                  done();
                });
        });
        
    });

    describe('Add Movie Comment', () => {
      it('should throw error if body is empty', (done) => {
        request(app)
        .post('/api/v1/movies/2/comment')
        .set('Accept', 'application/json')
        .expect(400)
        .end((err, res) => {
          expect(res.body.code).to.equal(400);
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal('comment is required');
          done();
        });
      });

      it('add movie comment', (done) => {
        request(app)
        .post('/api/v1/movies/2/comment')
        .set('Accept', 'application/json')
        .send({
          comment: "top notch movie"
        })
        .expect(201)
        .end((err, res) => {
          expect(res.body.code).to.equal(201);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Comment created successfully');
          done();
        });
      });

      it('should get movies', (done) => {
        nock('https://swapi.dev/api/films')
            .get('/')
            .reply(200, movieResponse);

            request(app)
            .get('/api/v1/movies')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
              expect(res.body.status).to.equal('success');
              expect(res.body.message).to.equal('Movies fetched successfully');
              expect(res.body.data).to.be.an('array');
              done();
            });
      
    });
    });

    describe('Get Movie Comments', () => {
      it('get movie comments', (done) => {
        request(app)
        .get('/api/v1/movies/2/comment')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body.code).to.equal(200);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Comments fetched successfully');
          done();
        });
      });
    });
});