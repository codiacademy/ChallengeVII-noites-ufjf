import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'

type ModalProps = {
  open: boolean
  onClose: () => void
}

export default function Modal({ open, onClose }: ModalProps) {
  return (
    <Dialog open={open} onClose={() => {}} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-700/75 transition-opacity data-closed:opacity-0 data-enter:duration-1000 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-scroll">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <h1 className="text-emerald-600">Cadastro de vendas</h1>
                    <form className="space-y-4">
                      <div className="items-start justify-evenly gap-2">
                        <label className="items-start text-[12px] text-white w-100 bg-black rounded-md flex-col justify-items-start">Nome Completo:</label>
                        <input id="txtDoc" type="text" placeholder="" className="bg-black text-white p-2 border border-white rounded w-full"></input>
                      </div>
                      <div className="items-start justify-evenly gap-2">      
                        <label className="items-start text-[12px] text-white">CPF:</label>
                        <input id="txtDoc" type="text" placeholder="" className="bg-black text-white border border-white p-2 rounded w-full"></input>
                      </div>

                      <div className="flex items-start flex-row justify-evenly gap-2">
                        <div className="col-6">
                          <label className="text-[12px] text-white">Data de nascimento: </label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black text-white border border-white p-2 rounded w-full"></input>
                        </div>


                        <div className="col-6">              
                        <label className="text-[12px] text-white">Gênero: </label>
                          <select className="bg-black text-white border border-white p-2 rounded w-full">
                              <option value="" disabled selected>Selecione</option>
                              <option value="feminino">Feminino</option>
                              <option value="masculino">Masculino</option>
                              <option value="nao-binario">Não-binário</option>
                              <option value="outro">Outro</option>
                              <option value="nao-declarado">Prefiro não declarar</option>
                          </select>
                        </div>


                      </div>


                      <div className="flex flex-row justify-evenly gap-2">  
                        <div className="col-6">                
                          <label className="text-[12px] text-white">Celular</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                        <div className="col-6">
                          <label className="text-[12px] text-white">WhatsApp</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                      </div>


                      <div className="flex flex-col justify-items-center gap-3">
                        <div className="items-start justify-evenly gap-2">
                          <label className="text-[12px] text-white">E-mail </label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                        <div>
                          <label className="text-[12px] text-white">Curso adquirido </label>
                           <select className="bg-black border border-white text-white p-2 rounded w-full">
                            <option value="" disabled selected>Selecione</option>
                            <option value="curso1">Frontend</option>
                            <option value="curso2">Backend</option>
                            <option value="curso3">Fullstack Online</option>
                            <option value="curso4">Codi Trainee</option>
                          </select>
                        </div>
                      <div>
                        <label className="text-[12px] text-white">Tipo de curso</label>
                          <select className="bg-black border border-white text-white p-2 rounded w-full">
                            <option value="" disabled selected>Selecione</option>
                            <option value="presencial">Presencial</option>
                            <option value="online">Online</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-wrow justify-evenly grid-cols-2 gap-2">
                        <div className="col-6">
                          <label className="text-sm text-[12px] text-white">Valor do curso</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                        <div className="col-6">
                          <label className="text-center text-[12px] text-white">Descontos aplicados</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                      </div>


                      <div className="flex flex-row justify-center grid-cols-2 gap-2">
                        <div className="col-6">
                          <label className="text-[12px] text-white">Impostos</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                        <div className="col-6">
                          <label className="text-[12px] text-white">Comissões</label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                      </div>


                      <div className="flex flex-row justify-center grid-cols-2 gap-2">
                        <div className="col-6">
                          <label className="text-[12px] text-white">Taxa do cartão ou boleto </label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>
                        <div className="col-6">
                          <label className="text-[12px] text-white">Valor Final </label>
                          <input id="txtDoc" type="text" placeholder="" className="bg-black border border-white text-white p-2 rounded w-full"></input>
                        </div>  
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md cursor-pointer bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Adicionar
              </button>
              <button
                type="button"
                data-autofocus
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md cursor-pointer bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancelar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
