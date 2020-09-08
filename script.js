import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '10s',
};

export default function() {
  let res = http.get('http://p2p-charge.ms.qa/api/v1/transactions/dashboard');
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}