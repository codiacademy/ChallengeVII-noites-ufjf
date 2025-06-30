import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Sales, CourseName } from "@/types/types";

const SaleSchema = Yup.object().shape({
  customer: Yup.object().shape({
    name: Yup.string()
      .required("Nome completo é obrigatório")
      .min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    phone: Yup.string()
      .matches(
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
        "Telefone inválido (ex: (11) 99999-9999)"
      )
      .required("Telefone é obrigatório"),
    cpf: Yup.string()
      .matches(
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        "CPF inválido (ex: 123.456.789-10)"
      )
      .required("CPF é obrigatório"),
  }),
  course: Yup.object().shape({
    type: Yup.string()
      .oneOf(["presencial", "online"], "Tipo de curso inválido")
      .required("Tipo de curso é obrigatório"),
    name: Yup.string().required("Curso é obrigatório"),
    price: Yup.number()
      .min(0, "Valor do curso deve ser maior ou igual a 0")
      .required("Valor do curso é obrigatório"),
  }),
  discount: Yup.number()
    .min(0, "Desconto deve ser maior ou igual a 0")
    .required("Desconto é obrigatório"),
  taxes: Yup.number()
    .min(0, "Impostos devem ser maiores ou iguais a 0")
    .required("Impostos são obrigatórios"),
  commissions: Yup.number()
    .min(0, "Comissões devem ser maiores ou iguais a 0")
    .required("Comissões são obrigatórias"),
  cardFees: Yup.number()
    .min(0, "Taxas de cartão devem ser maiores ou iguais a 0")
    .required("Taxas de cartão são obrigatórias"),
  finalPrice: Yup.number()
    .min(0, "Valor final deve ser maior ou igual a 0")
    .required("Valor final é obrigatório"),
});

type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  onSave: (sale: Sales) => void;
  sale?: Sales | null; // Para edição
};

export default function Modal({
  title,
  open,
  onClose,
  onSave,
  sale,
}: ModalProps) {
  const formik = useFormik({
    initialValues: {
      customer: {
        name: sale?.customer.name || "",
        email: sale?.customer.email || "",
        phone: sale?.customer.phone || "",
        cpf: sale?.customer.cpf || "",
      },
      course: {
        type: sale?.course.type || "",
        name: sale?.course.name || "",
        price: sale?.course.price || 0,
      },
      discount: sale?.discount || 0,
      taxes: sale?.taxes || 0,
      commissions: sale?.commissions || 0,
      cardFees: sale?.cardFees || 0,
      finalPrice: sale?.finalPrice || 0,
    },
    validationSchema: SaleSchema,
    enableReinitialize: true, // Permite reinicializar os valores quando a prop `sale` muda
    onSubmit: (values) => {
      const newSale: Sales = {
        id: sale?.id || Date.now(), // Usa o ID existente ou gera um novo
        date: new Date().toISOString().split("T")[0], // Data atual no formato YYYY-MM-DD
        customer: values.customer,
        course: {
          name: values.course.name as CourseName,
          price: values.course.price,
          type: values.course.type as "online" | "presencial",
        },
        discount: values.discount,
        taxes: values.taxes,
        commissions: values.commissions,
        cardFees: values.cardFees,
        finalPrice: values.finalPrice,
      };
      onSave(newSale);
      formik.resetForm();
      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
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
                  <h1 className="text-emerald-600">{title}</h1>
                  <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="items-start justify-evenly gap-2">
                      <label className="w-100 flex-col items-start justify-items-start rounded-md bg-black text-[12px] text-white">
                        Nome Completo:
                      </label>
                      <input
                        id="customer.name"
                        name="customer.name"
                        type="text"
                        className="w-full rounded border border-white bg-black p-2 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customer.name}
                      />
                      {formik.touched.customer?.name &&
                      formik.errors.customer?.name ? (
                        <div className="text-red-500 text-xs">
                          {formik.errors.customer.name}
                        </div>
                      ) : null}
                    </div>

                    <div className="items-start justify-evenly gap-2">
                      <label className="items-start text-[12px] text-white">
                        CPF:
                      </label>
                      <input
                        id="customer.cpf"
                        name="customer.cpf"
                        type="text"
                        className="w-full rounded border border-white bg-black p-2 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customer.cpf}
                      />
                      {formik.touched.customer?.cpf &&
                      formik.errors.customer?.cpf ? (
                        <div className="text-red-500 text-xs">
                          {formik.errors.customer.cpf}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-6">
                      <label className="text-[12px] text-white">
                        Número de telefone
                      </label>
                      <input
                        id="customer.phone"
                        name="customer.phone"
                        type="text"
                        className="w-full rounded border border-white bg-black p-2 text-white"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customer.phone}
                      />
                      {formik.touched.customer?.phone &&
                      formik.errors.customer?.phone ? (
                        <div className="text-red-500 text-xs">
                          {formik.errors.customer.phone}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col justify-items-center gap-3">
                      <div className="items-start justify-evenly gap-2">
                        <label className="text-[12px] text-white">E-mail</label>
                        <input
                          id="customer.email"
                          name="customer.email"
                          type="text"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.customer.email}
                        />
                        {formik.touched.customer?.email &&
                        formik.errors.customer?.email ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.customer.email}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="text-[12px] text-white">
                          Curso adquirido
                        </label>
                        <select
                          id="course.name"
                          name="course.name"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.course.name}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>
                          <option value="curso fullstack">
                            Curso Fullstack
                          </option>
                          <option value="curso frontend">Curso Frontend</option>
                          <option value="curso backend">Curso Backend</option>
                          <option value="inglês para programadores">
                            Inglês para Programadores
                          </option>
                          <option value="autocad">Autocad</option>
                          <option value="data science">Data Science</option>
                          <option value="código limpo">Código Limpo</option>
                          <option value="areas de TI">Áreas de TI</option>
                          <option value="linkedin para devs">
                            LinkedIn para Devs
                          </option>
                          <option value="bootcamp magic com contratação">
                            Bootcamp Magic com Contratação
                          </option>
                          <option value="github">GitHub</option>
                          <option value="rotina de resultados">
                            Rotina de Resultados
                          </option>
                          <option value="intensivão html, css e js">
                            Intensivão HTML, CSS e JS
                          </option>
                          <option value="curso de javascript avançado">
                            Curso de JavaScript Avançado
                          </option>
                          <option value="fundamentos do desenvolvimento web">
                            Fundamentos do Desenvolvimento Web
                          </option>
                        </select>
                        {formik.touched.course?.name &&
                        formik.errors.course?.name ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.course.name}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="text-[12px] text-white">
                          Tipo de curso
                        </label>
                        <select
                          id="course.type"
                          name="course.type"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.course.type}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>
                          <option value="presencial">Presencial</option>
                          <option value="online">Online</option>
                        </select>
                        {formik.touched.course?.type &&
                        formik.errors.course?.type ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.course.type}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex-wrow flex grid-cols-2 justify-evenly gap-2">
                      <div className="col-6">
                        <label className="text-sm text-[12px] text-white">
                          Valor do curso
                        </label>
                        <input
                          id="course.price"
                          name="course.price"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.course.price}
                        />
                        {formik.touched.course?.price &&
                        formik.errors.course?.price ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.course.price}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <label className="text-center text-[12px] text-white">
                          Descontos aplicados
                        </label>
                        <input
                          id="discount"
                          name="discount"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.discount}
                        />
                        {formik.touched.discount && formik.errors.discount ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.discount}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex grid-cols-2 flex-row justify-center gap-2">
                      <div className="col-6">
                        <label className="text-[12px] text-white">
                          Impostos
                        </label>
                        <input
                          id="taxes"
                          name="taxes"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.taxes}
                        />
                        {formik.touched.taxes && formik.errors.taxes ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.taxes}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <label className="text-[12px] text-white">
                          Comissões
                        </label>
                        <input
                          id="commissions"
                          name="commissions"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.commissions}
                        />
                        {formik.touched.commissions &&
                        formik.errors.commissions ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.commissions}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex grid-cols-2 flex-row justify-center gap-2">
                      <div className="col-6">
                        <label className="text-[12px] text-white">
                          Taxa do cartão
                        </label>
                        <input
                          id="cardFees"
                          name="cardFees"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cardFees}
                        />
                        {formik.touched.cardFees && formik.errors.cardFees ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.cardFees}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <label className="text-[12px] text-white">
                          Valor Final
                        </label>
                        <input
                          id="finalPrice"
                          name="finalPrice"
                          type="number"
                          className="w-full rounded border border-white bg-black p-2 text-white"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.finalPrice}
                        />
                        {formik.touched.finalPrice &&
                        formik.errors.finalPrice ? (
                          <div className="text-red-500 text-xs">
                            {formik.errors.finalPrice}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full cursor-pointer justify-center rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-600 sm:ml-3 sm:w-auto"
                      >
                        {sale ? "Atualizar" : "Adicionar"}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
