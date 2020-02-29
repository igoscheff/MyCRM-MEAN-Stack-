declare var M //Создаем переменную чтобы typeScript не ругался так как он не видит подключенный JS файл материалайз

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message})
  }
}
