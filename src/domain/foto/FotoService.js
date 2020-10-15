export default class FotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  listar() {
    return this._resource.query().then(res => res.json());
  }

  cadastrar(foto) {
    return this._resource.post(foto);
  }

  apagar(id) {
    return this._resource.delete({ id });
  }
}
